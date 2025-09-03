package com.timeright.adm.controller;

import com.timeright.adm.entity.Promocao;
import com.timeright.adm.repository.PromocaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/promocoes")
@CrossOrigin(origins = "*")
public class PromocaoController {
    
    @Autowired
    private PromocaoRepository promocaoRepository;
    
    @GetMapping
    public List<Promocao> listar() {
        return promocaoRepository.findAll();
    }
    
    @PostMapping
    public Promocao criar(@RequestBody Promocao promocao) {
        return promocaoRepository.save(promocao);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Promocao> atualizar(@PathVariable Long id, @RequestBody Promocao promocao) {
        return promocaoRepository.findById(id)
            .map(p -> {
                p.setTitulo(promocao.getTitulo());
                p.setDescricao(promocao.getDescricao());
                p.setDesconto(promocao.getDesconto());
                p.setValidade(promocao.getValidade());
                p.setAtiva(promocao.getAtiva());
                return ResponseEntity.ok(promocaoRepository.save(p));
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        return promocaoRepository.findById(id)
            .map(p -> {
                promocaoRepository.delete(p);
                return ResponseEntity.ok().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}