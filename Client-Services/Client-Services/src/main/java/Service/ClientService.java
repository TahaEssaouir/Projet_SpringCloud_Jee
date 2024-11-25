package Service;

import entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.ClientRepository;


import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List getAllClients() {
        return clientRepository.findAll();
    }

    public Object getClientById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Object saveClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}