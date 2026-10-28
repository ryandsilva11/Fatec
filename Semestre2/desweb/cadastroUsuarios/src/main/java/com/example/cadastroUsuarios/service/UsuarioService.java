package com.example.cadastroUsuarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.cadastroUsuarios.repository.UsuarioRepository;
import com.example.cadastroUsuarios.model.Usuario;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> listUsuario() {
        return usuarioRepository.findAll();
    }
}
