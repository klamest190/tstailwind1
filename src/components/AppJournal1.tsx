import { useEffect, useState } from "react";
import AppTemplate2 from "./AppTemplate2";
import Button1 from "./Button1";

const AppJournal1 = () => {
  const loadJournalEntries = (): string[] => {
    const data = localStorage.getItem("journalEntries");
    if (!data) return [];
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  };

  const [journalEntries, setJournalEntries] =
    useState<string[]>(loadJournalEntries);
  const [journalText, setJournalText] = useState<string>("");

  useEffect(() => {
    console.log("Trigger2");
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
  }, [journalEntries]);

  const addJournalEntry = () => {
    const text = journalText.trim();
    if (!text) return;
    setJournalEntries((prev) => [text, ...prev]);

    setJournalText("");
  };

  const deleteJournalEntry = (indexToDelete: number) => {
    setJournalEntries((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <AppTemplate2>
      <h1 className="text-xl md:text-2xl font-semibold">My Journal</h1>

      {/* Input Section*/}
      <div className="space-y-3">
        <textarea
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Write your thoughts"
          className="w-full min-h-40 rounded-xl border
         border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30
         focus:border-blue-400 transition
        "
        ></textarea>
        <Button1 onClick={addJournalEntry}>Save Entry</Button1>
      </div>

      {/* Divider*/}
      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-lg font-medium mb-3">Previous Entries</h2>
      </div>

      {/* Journal Entries*/}
      <div className="space-y-3">
        {journalEntries.map((entry, index) => (
          <div
            key={index}
            className="relative bg-gray-50 rounded-xl p-3 border border-gray-200"
          >
            <button
              aria-label="Delete entry"
              title="Delete"
              onClick={() => deleteJournalEntry(index)}
              className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-md
             text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition"
            >
              X
            </button>
            {entry}
          </div>
        ))}
      </div>

      {/* <div className="space-y-3">
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          Today i start building my jorunaling app
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          I like how clean the layout looks
        </div>
      </div> */}
    </AppTemplate2>
  );
};

export default AppJournal1;
