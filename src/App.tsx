import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import BackToTop from '@/components/BackToTop';

const queryClient = new QueryClient();

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<Router>
				<div className="flex flex-col min-h-screen dark:bg-gray-900">
					<NavBar />
					<main className="flex-grow">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
					<BackToTop />
				</div>
			</Router>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
