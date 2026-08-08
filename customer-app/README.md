# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.









Future upgrage:
  1. Profile route commanded -> src/constants/navcontent.js 
       <!-- { label: "Profile", to: ROUTES.LOGIN }, -->
       
  2. Book a session -> view my booking hiding and change route to back to home.
      <!-- <Link to={ROUTES.HOME} className="btn-primary">
        Back To Home
      </Link> -->
      
  3. Pageloader images turn off temporarily 
      <!-- <>
      {/* {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <ScrollToTop />
      <AppRoutes />
      <ScrollToTopButton /> */}
      <AppRoutes />
      </> -->
      
  4. Header transparent images added
     Before,
     <!-- <header className="fixed top-0 left-0 right-0 z-50 bg-frost/90 backdrop-blur-md border-b border-mist shadow-sm transition-all duration-300"> -->
     after,
     <!-- <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg"> -->