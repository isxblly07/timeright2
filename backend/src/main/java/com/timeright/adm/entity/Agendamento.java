package com.timeright.adm.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String cliente;
    
    @ManyToOne
    @JoinColumn(name = "servico_id")
    private Servico servico;
    
    @ManyToOne
    @JoinColumn(name = "profissional_id")
    private Profissional profissional;
    
    private LocalDate data;
    private LocalTime hora;
    
    @Enumerated(EnumType.STRING)
    private StatusAgendamento status = StatusAgendamento.PENDENTE;
    
    public enum StatusAgendamento {
        PENDENTE, CONFIRMADO, CANCELADO
    }
    
    public Agendamento() {}
    
    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getCliente() { return cliente; }
    public void setCliente(String cliente) { this.cliente = cliente; }
    
    public Servico getServico() { return servico; }
    public void setServico(Servico servico) { this.servico = servico; }
    
    public Profissional getProfissional() { return profissional; }
    public void setProfissional(Profissional profissional) { this.profissional = profissional; }
    
    public LocalDate getData() { return data; }
    public void setData(LocalDate data) { this.data = data; }
    
    public LocalTime getHora() { return hora; }
    public void setHora(LocalTime hora) { this.hora = hora; }
    
    public StatusAgendamento getStatus() { return status; }
    public void setStatus(StatusAgendamento status) { this.status = status; }
}