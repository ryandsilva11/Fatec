package com.example.cadastroUsuarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.cadastroUsuarios.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

import com.example.cadastroUsuarios.model.Usuario;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public List<Usuario> listUsuario() {
        return usuarioRepository.findAll();
    }

    @Transactional
    public Usuario addUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
