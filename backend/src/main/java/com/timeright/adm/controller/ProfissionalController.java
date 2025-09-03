package com.timeright.adm.controller;

import com.timeright.adm.entity.Profissional;
import com.timeright.adm.repository.ProfissionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profissionais")
@CrossOrigin(origins = "*")
public class ProfissionalController {
    
    @Autowired
    private ProfissionalRepository profissionalRepository;
    
    @GetMapping
    public List<Profissional> listar() {
        return profissionalRepository.findAll();
    }
    
    @PostMapping
    public Profissional criar(@RequestBody Profissional profissional) {
        return profissionalRepository.save(profissional);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Profissional> atualizar(@PathVariable Long id, @RequestBody Profissional profissional) {
        return profissionalRepository.findById(id)
            .map(p -> {
                p.setNome(profissional.getNome());
                p.setEspecialidade(profissional.getEspecialidade());
                p.setTelefone(profissional.getTelefone());
                return ResponseEntity.ok(profissionalRepository.save(p));
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        return profissionalRepository.findById(id)
            .map(p -> {
                profissionalRepository.delete(p);
                return ResponseEntity.ok().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}