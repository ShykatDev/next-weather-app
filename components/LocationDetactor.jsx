'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const LocationDetactor = () => {
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(()=> {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        params.set('latitude', latitude);
        params.set('longitude', longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      }, (error) => {
        console.error("Error getting location:", error);
        setLoading(false);
      });
    }
  }, [pathName, searchParams])

  return (
    <div>
      {
        loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full size-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">Location Detected</h1>
            <p className="text-gray-600">Redirecting...</p>
          </div>
        )
      }
    </div>
  )
}

export default LocationDetactor