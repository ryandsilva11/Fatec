package com.example.cadastroUsuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.cadastroUsuarios.model.Usuario;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    public List<Usuario> findByNome(String nome);

    boolean existsByEmail(String email);
}
