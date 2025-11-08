import api from "./api";

// Menu Item service
export const menuService = {
  // Get all menu items
  async getAll() {
    const response = await api.get("/menuitem");
    return response.data;
  },

  // Get menu item by ID
  async getById(id) {
    const response = await api.get(`/menuitem/${id}`);
    return response.data;
  },

  // Get menu items by kantin
  async getByKantin(kantinId) {
    const response = await api.get(`/menuitem/kantin/${kantinId}`);
    return response.data;
  },

  // Search menu item by name or price
  async search(params) {
    const response = await api.get("/menuitem/", { params });
    return response.data;
  },

  // Create new menu item
  async create(menuData) {
    const response = await api.post("/menuitem", menuData);
    return response.data;
  },

  // Update menu item
  async update(id, menuData) {
    const response = await api.put(`/menuitem/${id}`, menuData);
    return response.data;
  },

  // Delete menu item
  async delete(id) {
    const response = await api.delete(`/menuitem/${id}`);
    return response.data;
  },
};
