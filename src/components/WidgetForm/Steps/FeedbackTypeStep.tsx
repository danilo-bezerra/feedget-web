import React from "react";
import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface onFeedbackTypeChangedProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: onFeedbackTypeChangedProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex gap-2 py-8 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="flex-1 bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
