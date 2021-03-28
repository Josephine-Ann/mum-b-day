import { FunctionContextComponent } from '../FunctionContextComponent/FunctionContextComponent';
import { MainPageProvider } from '../MainPageProvider'


function App() {
  return (
    <MainPageProvider>
      <FunctionContextComponent />
    </MainPageProvider>
  );
}

export default App;
