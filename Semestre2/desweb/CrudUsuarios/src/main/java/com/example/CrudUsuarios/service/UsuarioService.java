package com.example.CrudUsuarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.CrudUsuarios.repository.UsuarioRepository;
import com.example.CrudUsuarios.model.Usuario;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public List<Usuario> listAll() {
        return repository.findAll();
    }

    public Usuario add(Usuario usuario) {
        return repository.save(usuario);
    }

    public Usuario update(Long id, Usuario dadosNovos) {
        Usuario usuarioAtual = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        usuarioAtual.setNome(dadosNovos.getNome());
        usuarioAtual.setEmail(dadosNovos.getEmail());
        return repository.save(usuarioAtual);
    }
}
