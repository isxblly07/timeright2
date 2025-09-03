package com.timeright.adm.controller;

import com.timeright.adm.entity.Agendamento;
import com.timeright.adm.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {
    
    @Autowired
    private AgendamentoRepository agendamentoRepository;
    
    @GetMapping
    public List<Agendamento> listar() {
        return agendamentoRepository.findAll();
    }
    
    @GetMapping("/hoje")
    public List<Agendamento> listarHoje() {
        return agendamentoRepository.findByData(LocalDate.now());
    }
    
    @PostMapping
    public Agendamento criar(@RequestBody Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Agendamento> atualizar(@PathVariable Long id, @RequestBody Agendamento agendamento) {
        return agendamentoRepository.findById(id)
            .map(a -> {
                a.setCliente(agendamento.getCliente());
                a.setServico(agendamento.getServico());
                a.setProfissional(agendamento.getProfissional());
                a.setData(agendamento.getData());
                a.setHora(agendamento.getHora());
                a.setStatus(agendamento.getStatus());
                return ResponseEntity.ok(agendamentoRepository.save(a));
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        return agendamentoRepository.findById(id)
            .map(a -> {
                agendamentoRepository.delete(a);
                return ResponseEntity.ok().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}