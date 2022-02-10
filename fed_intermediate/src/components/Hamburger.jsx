import HamburgerNav from "./HamburgerNav";

export default function Hamburger({
  hamburgerOpen,
  toggleHamburger,
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  console.log("categories HAM", categories);
  return (
    <>
      <div
        onClick={() => toggleHamburger(!hamburgerOpen)}
        className="hamburger"
      >
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      {hamburgerOpen ? (
        <HamburgerNav
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          hamburgerOpen={hamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
      ) : (
        ""
      )}

      <style jsx>{`
        .hamburger {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }

        .burger {
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: #eeecec;
          transform-origin: 1px;
          transition: all 0.3s linear;
        }

        .burger1 {
          transform: ${hamburgerOpen ? "rotate(45deg)" : "rotate(0)"};
        }
        .burger2 {
          transform: ${hamburgerOpen ? "translateX(100%)" : "translateX(0)"};
          opacity: ${hamburgerOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${hamburgerOpen ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </>
  );
}
