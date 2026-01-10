import React, { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
};

const VideoModal: React.FC<Props> = ({ isOpen, onClose, videoUrl, title }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-pink-200 bg-white/90 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-pink-200 px-5 py-3">
          <p className="text-sm font-semibold text-pink-800">{title}</p>
          <button
            onClick={onClose}
            className="rounded-lg border border-pink-200 bg-white px-3 py-1 text-sm font-semibold text-pink-800 hover:bg-pink-50"
          >
            Close
          </button>
        </div>

        <div className="bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="h-[75vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
