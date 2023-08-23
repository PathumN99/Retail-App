using RetailAppServer.Models;

namespace RetailAppServer.ServiceInterfaces
{
    public interface IAccessoryService
    {
        Task<IEnumerable<Accessory>> GetAll();
    }
}
