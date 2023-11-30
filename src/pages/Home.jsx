import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
  POPUP
</div>; */
}

const Home = () => {
  const adjustIslandForDifferentDevices = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let screenRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, screenRotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForDifferentDevices();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* Emits light to all direction from a single point
          <pointLight />  */}
          {/* <spotLight /> Kinda same to point light, but in a cone shape directional light*/}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
