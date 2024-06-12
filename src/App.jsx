import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./configs/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layouts/Layout";
import { Toaster } from "react-hot-toast";
import ProductsProvider from "./context/ProductsProvider";


function App() {

  const queryClient = new QueryClient({ defaultOptions })

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <BrowserRouter>
          <Layout>
            <Router />
            <Toaster />
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools />
      </ProductsProvider>
    </QueryClientProvider>
  )
}

export default App;
