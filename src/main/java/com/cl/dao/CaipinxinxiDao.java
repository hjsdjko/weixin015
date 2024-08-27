package com.cl.dao;

import com.cl.entity.CaipinxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.CaipinxinxiView;


/**
 * 菜品信息
 * 
 * @author 
 * @email 
 * @date 2024-03-30 10:32:12
 */
public interface CaipinxinxiDao extends BaseMapper<CaipinxinxiEntity> {
	
	List<CaipinxinxiView> selectListView(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);

	List<CaipinxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
	
	CaipinxinxiView selectView(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);



}
