package com.upiiz.Ejercicio11.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalculadoraController {
    @GetMapping("/calculadora")
    public String mostrarCalculadora() {
        return "calculadora";
    }

}
