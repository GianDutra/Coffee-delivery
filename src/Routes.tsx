import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CheckoutPage } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/Default";
import { SucessPage } from "./pages/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/success" element={<SucessPage />} />
            </Route>
        </Routes>
    )
}