import {Route, Routes} from "react-router";
import {
  Layout,
  HomePage,
  ProfilePage,
  FavoritesPage,
  CarListPage,
  CarDetailsPage,
  OrderPage,
  NotFoundPage,
} from "pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cars" element={<CarListPage />} />
          <Route path="cars/:carName" element={<CarDetailsPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="order/:orderId" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}