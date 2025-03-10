import DynamicForm from "./components/DynamicForm";
import { formSchema } from "./data/formSchema";
import CustomCursor from "./components/CustomCursor";


function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <CustomCursor />
      <DynamicForm schema={formSchema} />
    </div>
  );
}

export default App;
