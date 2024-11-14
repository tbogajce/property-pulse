const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
export const fetchProperties = async () => {
  try {
    // handle if the domain is not available yet
    if (!apiDomain) return [];

    const res = await fetch(`${apiDomain}/properties`);

    if (!res) throw new Error("Failed to fetch properties");

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// fetch single property
export const fetchProperty = async (id) => {
  try {
    if (!apiDomain) return null;

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res) throw new Error("Failed to fetch a property");

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
