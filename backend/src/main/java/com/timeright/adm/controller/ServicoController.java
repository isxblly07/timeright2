package com.timeright.adm.controller;

import com.timeright.adm.entity.Servico;
import com.timeright.adm.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servicos")
@CrossOrigin(origins = "*")
public class ServicoController {
    
    @Autowired
    private ServicoRepository servicoRepository;
    
    @GetMapping
    public List<Servico> listar() {
        return servicoRepository.findAll();
    }
    
    @PostMapping
    public Servico criar(@RequestBody Servico servico) {
        return servicoRepository.save(servico);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Servico> atualizar(@PathVariable Long id, @RequestBody Servico servico) {
        return servicoRepository.findById(id)
            .map(s -> {
                s.setNome(servico.getNome());
                s.setPreco(servico.getPreco());
                s.setDuracao(servico.getDuracao());
                return ResponseEntity.ok(servicoRepository.save(s));
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        return servicoRepository.findById(id)
            .map(s -> {
                servicoRepository.delete(s);
                return ResponseEntity.ok().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}