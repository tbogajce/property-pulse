const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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
