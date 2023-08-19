using RetailAppServer.Models;

namespace RetailAppServer.ServiceInterfaces
{
    public interface IApparelService
    {
        Task<IEnumerable<Apparel>> getAll();
    }
}
