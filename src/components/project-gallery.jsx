"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { projects } from "@/data/projects";

const GalleryContext = createContext(null);

export function ProjectGallery({ children }) {
  const [selection, setSelection] = useState(null);
  const triggerRef = useRef(null);

  function openProject(projectId, trigger) {
    const theme = getComputedStyle(trigger.closest(".card"));
    triggerRef.current = trigger;
    setSelection({
      id: projectId,
      background: projects[projectId].dialogBackground ?? theme.background,
      color: theme.color,
    });
  }

  const restoreFocus = useCallback(() => {
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <GalleryContext.Provider value={openProject}>
      {children}
      {selection && (
        <ProjectDialog
          key={selection.id}
          project={projects[selection.id]}
          theme={selection}
          onClose={() => setSelection(null)}
          restoreFocus={restoreFocus}
        />
      )}
    </GalleryContext.Provider>
  );
}

export function ProjectTrigger({ projectId }) {
  const openProject = useContext(GalleryContext);

  return (
    <button
      className="project-open"
      type="button"
      aria-label={projects[projectId].label}
      aria-haspopup="dialog"
      aria-controls="project-dialog"
      onClick={(event) => openProject(projectId, event.currentTarget)}
    />
  );
}

function ProjectDialog({ project, theme, onClose, restoreFocus }) {
  const dialogRef = useRef(null);
  const swipeStart = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const imageCount = project.images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("project-dialog-open");

    return () => {
      dialog.close();
      document.body.classList.remove("project-dialog-open");
      restoreFocus();
    };
  }, [restoreFocus]);

  function stepSlide(step) {
    setSlideIndex((index) => (index + step + imageCount) % imageCount);
  }

  function handleKeyDown(event) {
    if (
      imageCount < 2 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.target.matches('input, textarea, select, [contenteditable="true"]')
    )
      return;

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      stepSlide(event.key === "ArrowRight" ? 1 : -1);
    }
  }

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialogRef.current.close();
  }

  function handlePointerDown(event) {
    if (imageCount < 2) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    swipeStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setDragging(true);
  }

  function handlePointerMove(event) {
    const start = swipeStart.current;
    if (!start) return;
    let dx = event.clientX - start.x;
    // Resist dragging past the first/last image.
    if ((slideIndex === 0 && dx > 0) || (slideIndex === imageCount - 1 && dx < 0))
      dx *= 0.3;
    setDragX(dx);
  }

  function handlePointerUp(event) {
    const start = swipeStart.current;
    swipeStart.current = null;
    setDragging(false);
    setDragX(0);
    if (!start || event.type === "pointercancel") return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      const next = slideIndex + (dx < 0 ? 1 : -1);
      if (next >= 0 && next < imageCount) setSlideIndex(next);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      data-project={theme.id}
      id="project-dialog"
      aria-labelledby="project-dialog-title"
      style={{ "--dialog-bg": theme.background, "--dialog-ink": theme.color }}
      onClose={(event) => {
        // Strict Mode can queue a close event while replaying mount effects.
        if (!event.currentTarget.open) onClose();
      }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <button
        className="project-dialog__close"
        type="button"
        aria-label="Close project"
        autoFocus
        onClick={() => dialogRef.current.close()}
      >
        ×
      </button>
      <div className="project-dialog__layout">
        <div className="project-dialog__copy">
          <p className="mono project-dialog__eyebrow">
            <svg aria-hidden="true">
              <use href="#sparkle" />
            </svg>
            <span>{project.eyebrow}</span>
          </p>
          <h2 className="project-dialog__title" id="project-dialog-title">
            {project.title}
          </h2>
          <div className="project-dialog__details">{project.details}</div>
          {project.hasTags && (
            <div className="project-dialog__tags">{project.tags}</div>
          )}
          <div className="project-dialog__actions">
            <a
              className="prototype-link"
              href={project.prototypeUrl || undefined}
              role="link"
              aria-disabled={project.prototypeUrl ? undefined : true}
              tabIndex={project.prototypeUrl ? undefined : -1}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="prototype-note"
            >
              Try Prototype <span aria-hidden="true">↗</span>
            </a>
            {project.certificateUrl && (
              <a
                className="prototype-link"
                href={project.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <span aria-hidden="true">↗</span>
              </a>
            )}
            <p className="prototype-link__note" id="prototype-note">
              {project.prototypeUrl
                ? "Opens in a new tab."
                : "Prototype coming soon."}
            </p>
          </div>
        </div>
        <div
          className="project-dialog__media"
          role="region"
          aria-roledescription="carousel"
          aria-label="Project images"
        >
          <div
            className="project-carousel__stage"
            data-dragging={dragging ? "true" : "false"}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div
              className="project-carousel__track"
              style={{
                transform: `translateX(calc(${-slideIndex * 100}% + ${dragX}px))`,
              }}
            >
              {project.images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={
                    index === slideIndex
                      ? `${project.imageAlt}${imageCount > 1 ? ` — image ${slideIndex + 1} of ${imageCount}` : ""}`
                      : ""
                  }
                  aria-hidden={index === slideIndex ? undefined : true}
                  decoding="async"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          <div className="project-carousel__controls" hidden={imageCount < 2}>
            <div className="project-carousel__pagination">
              <p
                className="mono project-carousel__count"
                aria-live="polite"
                aria-atomic="true"
              >
                {slideIndex + 1} / {imageCount}
              </p>
              <div
                className="project-carousel__dots"
                role="group"
                aria-label="Choose image"
              >
                {project.images.map((src, index) => (
                  <button
                    key={src}
                    className="project-carousel__dot"
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === slideIndex ? "true" : "false"}
                    onClick={() => setSlideIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
