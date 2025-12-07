"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import { createPortal } from "react-dom";

type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

const useIsMounted = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const [activeProduct, setActiveProduct] = React.useState<Product | null>(null);
  const isMounted = useIsMounted();

  const closeModal = () => setActiveProduct(null);

  return (
    <>
      <div
        ref={ref}
        className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
                onOpen={() => setActiveProduct(product)}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
                onOpen={() => setActiveProduct(product)}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
                onOpen={() => setActiveProduct(product)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* PORTAL-BASED LIGHTBOX */}
      {isMounted &&
        createPortal(
          <AnimatePresence initial={false} mode="wait">
            {activeProduct && (
              <motion.div
                key="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center px-4"
                onClick={closeModal}
              >
                <motion.div
                  key="lightbox-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-end"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="mb-2 inline-flex items-center justify-center rounded-full border border-white/40 bg-black/60 px-2 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition cursor-default"
                  >
                    ✕
                  </button>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.995 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.995 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="relative w-full max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center"
                  >
                    <Image
                      src={activeProduct.thumbnail}
                      alt={activeProduct.title}
                      width={1600}
                      height={900}
                      className="w-full h-auto max-h-[80vh] object-contain cursor-default"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export const Header = () => {
  return (
    <div className="max-w-8xl mx-auto relative w-full flex flex-col xl:flex-row xl:items-center xl:justify-center gap-12 xl:gap-16 px-4 xl:px-8">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="xl:max-w-2xl flex-1 flex flex-col justify-center"
      >
        <h1 className="text-4xl xl:text-7xl font-bold text-white leading-tight whitespace-nowrap">
          Founders Fest Awards
        </h1>
        <p className="max-w-2xl text-base xl:text-xl mt-8 text-neutral-200">
          A tribute to the dreamers who build through uncertainty, push through
          long nights, and carry the unshakeable belief that their ideas can
          shape the future.
        </p>

        <p className="max-w-2xl text-base xl:text-xl mt-4 text-neutral-300">
          Founders Fest Awards celebrates the creators and leaders who move the
          ecosystem forward — those who innovate boldly, lead with intention,
          and create meaningful change across India’s growing startup landscape.
        </p>

        <p className="max-w-2xl text-base xl:text-xl mt-4 text-neutral-400">
          This platform shines a light on the builders working behind the
          scenes, turning challenges into breakthroughs, and inspiring the next
          generation of founders to rise.
        </p>
      </motion.div>

      {/* BIG DIVIDER */}
      <div className="hidden xl:block w-px h-96 bg-linear-to-b from-transparent via-white/30 to-transparent mx-4 shrink-0" />

      {/* RIGHT CONTENT - IMAGES */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center shrink-0"
      >
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo 1"
            width={200}
            height={200}
            className="h-60 w-60 hidden xl:flex xl:h-60 xl:w-60 object-contain opacity-90 hover:opacity-100 transition"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/logo2.png"
            alt="Logo 2"
            width={200}
            height={200}
            className="h-60 w-60 xl:h-60 xl:w-60 object-contain opacity-90 hover:opacity-100 transition"
          />
          <p className="text-white/90 font-bold text-xs xl:hidden uppercase tracking-wider">
            BROUGHT TO YOU BY
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  onOpen,
}: {
  product: Product;
  translate: MotionValue<number>;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="h-96 w-120 relative shrink-0 cursor-default"
      onClick={onOpen}
    >
      <div className="block h-full w-full">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-top-left absolute h-full w-full inset-0 hover:opacity-80 transition-opacity cursor-pointer"
          alt={product.title}
        />
      </div>
    </motion.div>
  );
};
