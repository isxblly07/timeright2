package com.timeright.adm.controller;

import com.timeright.adm.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
    
    @Autowired
    private AgendamentoRepository agendamentoRepository;
    
    @Autowired
    private ServicoRepository servicoRepository;
    
    @Autowired
    private ProfissionalRepository profissionalRepository;
    
    @Autowired
    private PromocaoRepository promocaoRepository;
    
    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();
        
        stats.put("agendamentosHoje", agendamentoRepository.findByData(LocalDate.now()).size());
        stats.put("servicosAtivos", servicoRepository.count());
        stats.put("profissionais", profissionalRepository.count());
        stats.put("promocoesAtivas", promocaoRepository.findAll().stream()
            .filter(p -> p.getAtiva() && p.getValidade().isAfter(LocalDate.now()))
            .count());
        
        return stats;
    }
}