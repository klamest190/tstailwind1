import AppTemplate2 from "./AppTemplate2";
import Button1 from "./Button1";

const AppJournal1 = () => {
  return (
    <AppTemplate2>
      <h1 className="text-xl md:text-2xl font-semibold">My Journal</h1>

      {/* Input Section*/}
      <div className="space-y-3">
        <textarea
          placeholder="Write your thoughts"
          className="w-full min-h-40 rounded-xl border
         border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus-ring-blue-500/30
         focus:border-blue-400 transition
        "
        ></textarea>
        <Button1>Save Entry</Button1>
      </div>

      {/* Divider*/}
      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-lg font-medium mb-3">Previous Entries</h2>

        <div className="space-y-3"></div>
      </div>

      {/* Fake Entries*/}
      <div className="space-y-3">
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          Today i start building my jorunaling app
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          I like how clean the layout looks
        </div>
      </div>
    </AppTemplate2>
  );
};

export default AppJournal1;
