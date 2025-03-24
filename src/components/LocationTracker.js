import { useEffect } from 'react';

const LocationTracker = () => {
  useEffect(() => {
    const siteName = "portfolio";

    if (localStorage.getItem("user_location_" + siteName)) {
      console.log("Location already stored for");
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
            .then((response) => response.json())
            .then((data) => {
              const locationDetails = {
                siteName: siteName,
                latitude: lat,
                longitude: lng,
                city: data.address.city || data.address.town || "Unknown",
                state: data.address.state || "Unknown",
                country: data.address.country || "Unknown",
                postalCode: data.address.postcode || "Unknown",
              };

              localStorage.setItem("user_location_" + siteName, JSON.stringify(locationDetails));
              

              const scriptURL = process.env.NEXT_PUBLIC_LOCATIONSAVER_SHEETS_API;
              fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(locationDetails),
              })
                .then(() => console.log("Location sent to Google Sheets for"))
                .catch((error) => console.error("Error sending location:", error));
            })
            .catch((error) => console.error("Error fetching location details:", error));
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return null;
};

export default LocationTracker;