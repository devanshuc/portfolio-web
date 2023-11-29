import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
  POPUP
</div>; */
}

const Home = () => {

  const adjustIslandForDifferentDevices = ()
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={<Loader />}>
            <directionalLight />

              <Island />
            </Suspense>
        </Canvas>
    </section>
  );
};

export default Home;
