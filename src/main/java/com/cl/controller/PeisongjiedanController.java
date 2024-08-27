package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.PeisongjiedanEntity;
import com.cl.entity.view.PeisongjiedanView;

import com.cl.service.PeisongjiedanService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 配送接单
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
@RestController
@RequestMapping("/peisongjiedan")
public class PeisongjiedanController {
    @Autowired
    private PeisongjiedanService peisongjiedanService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,PeisongjiedanEntity peisongjiedan,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("peisongyuan")) {
			peisongjiedan.setPeisongyuanzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<PeisongjiedanEntity> ew = new EntityWrapper<PeisongjiedanEntity>();

		PageUtils page = peisongjiedanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, peisongjiedan), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,PeisongjiedanEntity peisongjiedan, 
		HttpServletRequest request){
        EntityWrapper<PeisongjiedanEntity> ew = new EntityWrapper<PeisongjiedanEntity>();

		PageUtils page = peisongjiedanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, peisongjiedan), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( PeisongjiedanEntity peisongjiedan){
       	EntityWrapper<PeisongjiedanEntity> ew = new EntityWrapper<PeisongjiedanEntity>();
      	ew.allEq(MPUtil.allEQMapPre( peisongjiedan, "peisongjiedan")); 
        return R.ok().put("data", peisongjiedanService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(PeisongjiedanEntity peisongjiedan){
        EntityWrapper< PeisongjiedanEntity> ew = new EntityWrapper< PeisongjiedanEntity>();
 		ew.allEq(MPUtil.allEQMapPre( peisongjiedan, "peisongjiedan")); 
		PeisongjiedanView peisongjiedanView =  peisongjiedanService.selectView(ew);
		return R.ok("查询配送接单成功").put("data", peisongjiedanView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        PeisongjiedanEntity peisongjiedan = peisongjiedanService.selectById(id);
		peisongjiedan = peisongjiedanService.selectView(new EntityWrapper<PeisongjiedanEntity>().eq("id", id));
        return R.ok().put("data", peisongjiedan);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        PeisongjiedanEntity peisongjiedan = peisongjiedanService.selectById(id);
		peisongjiedan = peisongjiedanService.selectView(new EntityWrapper<PeisongjiedanEntity>().eq("id", id));
        return R.ok().put("data", peisongjiedan);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody PeisongjiedanEntity peisongjiedan, HttpServletRequest request){
    	peisongjiedan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(peisongjiedan);
        peisongjiedanService.insert(peisongjiedan);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody PeisongjiedanEntity peisongjiedan, HttpServletRequest request){
    	peisongjiedan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(peisongjiedan);
        peisongjiedanService.insert(peisongjiedan);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody PeisongjiedanEntity peisongjiedan, HttpServletRequest request){
        //ValidatorUtils.validateEntity(peisongjiedan);
        peisongjiedanService.updateById(peisongjiedan);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        peisongjiedanService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
