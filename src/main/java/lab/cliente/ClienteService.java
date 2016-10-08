package lab.cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lab.cliente.Cliente;

@Service
public class ClienteService {

  @Autowired
  private ClienteRepository clienteRepository;

  public Cliente registrarCliente(Cliente cliente) {
    return clienteRepository.save(cliente);
  }

  public Cliente obterCliente(Integer codigo) {
    return clienteRepository.findOne(codigo);
  }

  public Iterable<Cliente> obterTodos() {
    return clienteRepository.findAll();
  }
  
  public void deletarCliente(Cliente cliente) {
	  clienteRepository.delete(cliente.getCodigo());
  }
}
