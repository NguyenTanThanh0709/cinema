package com.tdtu.Cinema.Controller.Admin;

import com.tdtu.Cinema.Entity.PhimEntity;
import com.tdtu.Cinema.Entity.UserEnity;
import com.tdtu.Cinema.Service.IDanhGiaPhimService;
import com.tdtu.Cinema.Service.IPhimService;
import com.tdtu.Cinema.Service.IUserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class DanhGiaController {


    @Autowired
    private IPhimService phimService;

    @Autowired
    private IUserService userService;

    @GetMapping({"/qldanhgiaphim"})

    public String qldanhgiaphim(Model model,  HttpSession session) {
        List<PhimEntity> list =  phimService.findAll();
        model.addAttribute("listphim", list);
        String sdt = (String)session.getAttribute("sdt");
        UserEnity userEnity = userService.findBySdt(sdt).get();
        model.addAttribute("user",userEnity);
        return "Admin/qldanhgiaphim";
    }
}
