import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./FleetMap.css";

const FleetMap = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f2f5);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(5, 5, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Vehicles
    const vehicleGeometry = new THREE.BoxGeometry(0.5, 0.5, 1);
    const vehicleMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const vehiclePositions = [
      [0, 0.25, 0],
      [2, 0.25, -1],
      [-1, 0.25, 3],
    ];
    vehiclePositions.forEach((pos) => {
      const vehicle = new THREE.Mesh(vehicleGeometry, vehicleMaterial);
      vehicle.position.set(...pos);
      scene.add(vehicle);
    });

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xdcdcdc });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="fleet-map" ref={mountRef}></div>;
};

export default FleetMap;
