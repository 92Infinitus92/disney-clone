function AIAssistant({ suggestions }: any) {
  return (
    <div className="flex space-x-5 mt-32 xl:mt-42 p-10 pb-0">
      <div className="animate-pulse rounded-full bg-gradient-to-t from-purple-400 h-10 w-10 border-2 flex-shrink-0 border-white" />

      <div>
        <p className="text-sm text-purple-400">AI Assistant Suggests: </p>
        <p className="italic text-lg">{suggestions}</p>
      </div>
    </div>
  );
}
export default AIAssistant;
