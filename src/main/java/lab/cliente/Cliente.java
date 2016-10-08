package lab.cliente;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cliente {

  @Id
  private Integer codigo;

  public Integer getCodigo() {
    return codigo;
  }

  public void setCodigo(Integer codigo) {
    this.codigo = codigo;
  }

  private String nome;

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public Cliente() {
  }

  public Cliente(Integer codigo, String nome) {
    super();
    this.codigo = codigo;
    this.nome = nome;
  }

}
