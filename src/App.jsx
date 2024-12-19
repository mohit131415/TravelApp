import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { store } from '@/store';

// Common Components
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Navigation from '@/components/common/Navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy-loaded Pages
const Home = lazy(() => import('@/pages/Home'));

// Flight Pages
const FlightSearch = lazy(() => import('@/pages/flights/FlightSearch'));
const FlightList = lazy(() => import('@/pages/flights/FlightList'));
const FlightDetails = lazy(() => import('@/pages/flights/FlightDetails'));
const FlightBooking = lazy(() => import('@/pages/flights/FlightBooking'));

// Hotel Pages
const HotelSearch = lazy(() => import('@/pages/hotels/HotelSearch'));
const HotelList = lazy(() => import('@/pages/hotels/HotelList'));
const HotelDetails = lazy(() => import('@/pages/hotels/HotelDetails'));
const HotelBooking = lazy(() => import('@/pages/hotels/HotelBooking'));

// Cab Pages
const CabSearch = lazy(() => import('@/pages/cabs/CabSearch'));
const CabList = lazy(() => import('@/pages/cabs/CabList'));
const CabDetails = lazy(() => import('@/pages/cabs/CabDetails'));
const CabBooking = lazy(() => import('@/pages/cabs/CabBooking'));

// Bus Pages
const BusSearch = lazy(() => import('@/pages/buses/BusSearch'));
const BusList = lazy(() => import('@/pages/buses/BusList'));
const BusDetails = lazy(() => import('@/pages/buses/BusDetails'));
const BusBooking = lazy(() => import('@/pages/buses/BusBooking'));

// Train Pages
const TrainSearch = lazy(() => import('@/pages/trains/TrainSearch'));
const TrainList = lazy(() => import('@/pages/trains/TrainList'));
const TrainDetails = lazy(() => import('@/pages/trains/TrainDetails'));
const TrainBooking = lazy(() => import('@/pages/trains/TrainBooking'));

// Booking Pages
const Payment = lazy(() => import('@/pages/booking/Payment'));
const Confirmation = lazy(() => import('@/pages/booking/Confirmation'));
const BookingHistory = lazy(() => import('@/pages/booking/BookingHistory'));

// User Pages
const Profile = lazy(() => import('@/pages/user/Profile'));
const Bookings = lazy(() => import('@/pages/user/Bookings'));
const Preferences = lazy(() => import('@/pages/user/Preferences'));

// Fallback 404 Page
const NotFound = lazy(() => import('./pages/NotFound'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Layout Component
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <Navigation />
    <main className="flex-grow">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        {children}
      </Suspense>
    </main>
    <Footer />
  </div>
);

// App Component
export default function App() {
  return (
    // <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Flight Routes */}
              <Route path="/flights" element={<FlightSearch />} />
              <Route path="/flights/search" element={<FlightList />} />
              <Route path="/flights/:id" element={<FlightDetails />} />
              <Route path="/flights/booking/:id" element={<FlightBooking />} />

              {/* Hotel Routes */}
              <Route path="/hotels" element={<HotelSearch />} />
              <Route path="/hotels/search" element={<HotelList />} />
              <Route path="/hotels/:id" element={<HotelDetails />} />
              <Route path="/hotels/booking/:id" element={<HotelBooking />} />

              {/* Cab Routes */}
              <Route path="/cabs" element={<CabSearch />} />
              <Route path="/cabs/search" element={<CabList />} />
              <Route path="/cabs/:id" element={<CabDetails />} />
              <Route path="/cabs/booking/:id" element={<CabBooking />} />

              {/* Bus Routes */}
              <Route path="/buses" element={<BusSearch />} />
              <Route path="/buses/search" element={<BusList />} />
              <Route path="/buses/:id" element={<BusDetails />} />
              <Route path="/buses/booking/:id" element={<BusBooking />} />

              {/* Train Routes */}
              <Route path="/trains" element={<TrainSearch />} />
              <Route path="/trains/search" element={<TrainList />} />
              <Route path="/trains/:id" element={<TrainDetails />} />
              <Route path="/trains/booking/:id" element={<TrainBooking />} />

              {/* Booking Routes */}
              <Route path="/booking/payment" element={<Payment />} />
              <Route path="/booking/confirmation" element={<Confirmation />} />
              <Route path="/booking/history" element={<BookingHistory />} />

              {/* User Routes */}
              <Route path="/user/profile" element={<Profile />} />
              <Route path="/user/bookings" element={<Bookings />} />
              <Route path="/user/preferences" element={<Preferences />} />

              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    // </Provider>
  );
}
