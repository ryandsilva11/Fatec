package com.example.CrudUsuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.CrudUsuarios.model.Usuario;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findById(Long id);

    Optional<Usuario> findByName(String nome);
}
