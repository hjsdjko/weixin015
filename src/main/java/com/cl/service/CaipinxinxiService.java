package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.CaipinxinxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.CaipinxinxiView;


/**
 * 菜品信息
 *
 * @author 
 * @email 
 * @date 2024-03-30 10:32:12
 */
public interface CaipinxinxiService extends IService<CaipinxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<CaipinxinxiView> selectListView(Wrapper<CaipinxinxiEntity> wrapper);
   	
   	CaipinxinxiView selectView(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<CaipinxinxiEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<CaipinxinxiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<CaipinxinxiEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<CaipinxinxiEntity> wrapper);



}

