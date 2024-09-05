import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-semibold mb-8 text-center text-gray-900">Counters</h1>
        <div className="flex space-x-6">
          <div className="flex-1">
            <Counter />
          </div>
          <div className="flex-1">
            <CounterTwo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


