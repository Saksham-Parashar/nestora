export function getWishlist() {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveWishlist(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

export function addToWishlist(property) {
  const wishlist = getWishlist();

  const exists = wishlist.some((item) => item.id === property.id);

  if (exists) {
    return {
      success: false,
      message: "Property is already in your wishlist.",
    };
  }

  wishlist.push(property);
  saveWishlist(wishlist);

  return {
    success: true,
    message: "Added to wishlist ❤️",
  };
}

export function removeFromWishlist(id) {
  const wishlist = getWishlist().filter((item) => item.id !== id);
  saveWishlist(wishlist);
  return wishlist;
}

export function clearWishlist() {
  saveWishlist([]);
}
