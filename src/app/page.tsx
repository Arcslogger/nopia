"use client";

import { useState } from "react";
import * as Tone from "tone";
import { Frequency } from "tone/build/esm/core/type/Units";

export default function Home() {
  const [range, setRange] = useState(0);

  const chords = [
    [
      ["C4", "E4", "G4"],
      ["D4", "F4", "A4"],
      ["E4", "G4", "B4"],
      ["F4", "A4", "C5"],
      ["G4", "B4", "D5"],
      ["A4", "C5", "E5"],
      ["B4", "D5", "F5"],
    ],
    [
      ["D4", "F4", "A4"],
      ["E4", "G4", "B4"],
      ["F4", "A4", "C5"],
      ["G4", "B4", "D5"],
      ["A4", "C5", "E5"],
      ["B4", "D5", "F5"],
      ["C5", "E5", "G5"],
    ],
  ];

  const handleClick = (range: number) => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(chords[1][range], 0.01);
  };

  return (
    <main className="">
      <button
        className="border border-black rounded-md px-3 py-1"
        onClick={() => handleClick(range)}
      >
        test
      </button>
      <input
        type="range"
        min="0"
        max="6"
        step="1"
        value={range}
        onChange={(e) => {
          setRange(Number(e.target.value));
        }}
      />
    </main>
  );
}
