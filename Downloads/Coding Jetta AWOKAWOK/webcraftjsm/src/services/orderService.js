import api from "./api";

// Order service
export const orderService = {
  // Get all orders
  async getAll() {
    const response = await api.get("/order");
    return response.data;
  },

  // Get order by ID (with details)
  async getById(id) {
    const response = await api.get(`/order/${id}`);
    return response.data;
  },

  // Get orders by user ID
  async getByUser(userId) {
    const response = await api.get(`/users/${userId}/orders`);
    return response.data;
  },

  // Get orders by kantin ID
  async getByKantin(kantinId) {
    const response = await api.get(`/kantin/${kantinId}/orders`);
    return response.data;
  },

  // Get orders by payment status
  async getByStatus(status) {
    const response = await api.get(`/orders/status/${status}`);
    return response.data;
  },

  // Create new order
  async create(orderData) {
    const response = await api.post("/order", orderData);
    return response.data;
  },

  // Update order
  async update(id, orderData) {
    const response = await api.put(`/orders/${id}`, orderData);
    return response.data;
  },

  // Delete order
  async delete(id) {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
  },
};
