import React, { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void,
  screenshot: string | null,
}

export const ScreenshotButton = ({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) => {
  const [isTakenScreenshot, setInTakenScreenshot] = useState(false);

  async function handleTakeScrenshot() {
    setInTakenScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");
    onScreenshotTook(base64Image);
    setInTakenScreenshot(false);
  }

  if (screenshot) {
    return(
      <button
        type="button"
        className="p-1 border-transparent w-10 h-10 rounded-md flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180}}
      >
        <Trash weight="fill" onClick={() => onScreenshotTook(null)}/>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 border-transparent rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScrenshot}
    >
      {isTakenScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
};
