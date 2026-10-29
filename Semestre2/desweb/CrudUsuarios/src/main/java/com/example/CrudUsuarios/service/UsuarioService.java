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
}
