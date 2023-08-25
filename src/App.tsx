import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";

const App = () => {

  let persistor = persistStore(store)

let client = new QueryClient()

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client}>
            <RouterProvider router={mainRoute} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
